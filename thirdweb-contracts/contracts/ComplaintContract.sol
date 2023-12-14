// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract ComplaintContract {
    address public officer;
    address public owner;
    uint256 public nextId;
    uint256[] public pendingApprovals;
    uint256[] public pendingResolutions;
    uint256[] public resolvedCases;

    constructor(address _officer) {
        owner = msg.sender;
        officer = _officer;
        nextId = 1;
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "You are not the owner of this smart contract"
        );
        _;
    }

    modifier onlyOfficer() {
        require(
            msg.sender == officer,
            "You are not a registered officer of this smart contract"
        );
        _;
    }

    struct ComplaintStruct {
        uint256 id;
        address complaintRegisteredBy;
        string name;
        string complaintId;
        string mobileNumber;
        string email;
        string location;
        string title;
        string description;
        string approvalRemark;
        string resolutionRemark;
        bool isApproved;
        bool isResolved;
        bool exists;

    }
    mapping(uint256 => ComplaintStruct) public Complaints;
    mapping(address => uint256[]) public complaintsByWallet;

    event ComplaintFiled(
        uint256 id,
        address complaintRegisteredBy,
        string title,
        string complaintId,
        string description,
        string email,
        string location,
        string mobileNumber,
        string name
    );

    function fileComplaint(
        string memory _name,
        string memory _email,
        string memory _mobileNumber,
        string memory _location,
        string memory _complaintId,
        string memory _title,
        string memory _description
    ) public {
        ComplaintStruct storage newComplaint = Complaints[nextId];
        newComplaint.id = nextId;
        newComplaint.complaintRegisteredBy = msg.sender;
        newComplaint.name = _name;
        newComplaint.email = _email;
        newComplaint.complaintId = _complaintId;
        newComplaint.mobileNumber = _mobileNumber;
        newComplaint.location = _location;
        newComplaint.title = _title;
        newComplaint.description = _description;
        newComplaint.approvalRemark = "Pending Approval";
        newComplaint.resolutionRemark = "Pending Resolution";
        newComplaint.isApproved = false;
        newComplaint.isResolved = false;
        newComplaint.exists = true;
        emit ComplaintFiled(nextId, msg.sender, _name, _title, _description, _email, _location, _mobileNumber, _complaintId);
        complaintsByWallet[msg.sender].push(nextId);
        nextId++;
    }

   function getComplaintsByWallet(address wallet) public view returns (ComplaintStruct[] memory) {
    uint256[] memory complaintIds = complaintsByWallet[wallet];
    ComplaintStruct[] memory walletComplaints = new ComplaintStruct[](complaintIds.length);
    
    for (uint256 i = 0; i < complaintIds.length; i++) {
        uint256 complaintId = complaintIds[i];
        walletComplaints[i] = Complaints[complaintId];
    }
    
    return walletComplaints;
}

  function getAllComplaints() public view returns (ComplaintStruct[] memory) {
    ComplaintStruct[] memory allComplaints = new ComplaintStruct[](nextId - 1);
    uint256 complaintCount = 0;
    for (uint256 i = 1; i < nextId; i++) {
        if (Complaints[i].exists) {
            allComplaints[complaintCount] = Complaints[i];
            complaintCount++;
        }
    }
    return allComplaints;
}

  function approveComplaint(
      uint256 _id,
      string memory _approvalRemark
  ) public onlyOfficer {
      require(
          Complaints[_id].exists == true,
          "This complaint id does not exist"
      );
      require(
          Complaints[_id].isApproved == false,
          "Complaint is already approved"
      );
      Complaints[_id].isApproved = true;
      Complaints[_id].approvalRemark = _approvalRemark;
  }

  function discardComplaint(
      uint256 _id,
      string memory _approvalRemark
  ) public onlyOfficer {
      require(
          Complaints[_id].exists == true,
          "This complaint id does not exist"
      );
      require(
          Complaints[_id].isApproved == false,
          "Complaint is already approved"
      );
      Complaints[_id].exists = false;
      Complaints[_id].approvalRemark = string.concat(
          "This complaint is rejected. Reason: ",
          _approvalRemark
      );
  }

  function resolveComplaint(
      uint256 _id,
      string memory _resolutionRemark
  ) public onlyOfficer {
      require(
          Complaints[_id].exists == true,
          "This complaint id does not exist"
      );
      require(
          Complaints[_id].isApproved == true,
          "Complaint is not yet approved"
      );
      require(
          Complaints[_id].isResolved == false,
          "Complaint is already resolved"
      );
      Complaints[_id].isResolved = true;
      Complaints[_id].resolutionRemark = _resolutionRemark;
  }

  function calcPendingApprovalIds() public {
      delete pendingApprovals;
      for (uint256 i = 1; i < nextId; i++) {
          if (
              Complaints[i].isApproved == false &&
              Complaints[i].exists == true
          ) {
              pendingApprovals.push(Complaints[i].id);
          }
      }
  }

  function calcPendingResolutionIds() public {
      delete pendingResolutions;
      for (uint256 i = 1; i < nextId; i++) {
          if (
              Complaints[i].isResolved == false &&
              Complaints[i].isApproved == true &&
              Complaints[i].exists == true
          ) {
              pendingResolutions.push(Complaints[i].id);
          }
      }
  }

  function calcResolvedIds() public {
      delete resolvedCases;
      for (uint256 i = 1; i < nextId; i++) {
          if (Complaints[i].isResolved == true) {
              resolvedCases.push(Complaints[i].id);
          }
      }
  }

  function setOfficerAddress(address _officer) public onlyOwner {
      officer = _officer;
  }
}