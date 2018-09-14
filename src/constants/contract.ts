export const opctAbi = [
  {
    constant: false,
    inputs: [
      { name: "_applicant", type: "address" },
      { name: "_round", type: "uint8" },
      { name: "_successOrFailure", type: "bool" }
    ],
    name: "SetConfirmRound",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      { name: "_applicant", type: "address" },
      { name: "_round", type: "uint8" }
    ],
    name: "GetEvaluate",
    outputs: [{ name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      { name: "_applicant", type: "address" },
      { name: "_round", type: "uint8" }
    ],
    name: "GetConfirmRound",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "_applicant", type: "address" }],
    name: "GetApplicant",
    outputs: [
      { name: "", type: "string" },
      { name: "", type: "uint32" },
      { name: "", type: "string" },
      { name: "", type: "string" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "interviewer",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_newInterviewer", type: "address" }],
    name: "transferInterviewer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_name", type: "string" },
      { name: "_birth", type: "uint32" },
      { name: "_fingerprint", type: "string" },
      { name: "_portfolioURL", type: "string" }
    ],
    name: "SetApplicant",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "GetApplicantAddress",
    outputs: [{ name: "", type: "address[]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_applicant", type: "address" },
      { name: "_round", type: "uint8" },
      { name: "_score", type: "uint8" }
    ],
    name: "SetEvaluate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "previousOwner", type: "address" },
      { indexed: true, name: "newOwner", type: "address" }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "previousInterviewer", type: "address" },
      { indexed: true, name: "newInterviewer", type: "address" }
    ],
    name: "InterviewerTransferred",
    type: "event"
  }
];
