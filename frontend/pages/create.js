import React, { useState } from "react";

export default function CreateProposal() {
  const [proposalText, setProposalText] = useState("");

  function handleCreate() {
    alert("Proposal would be created: " + proposalText);
    // In practice, you'd call the Governor contract with ethers.js here.
  }

  return (
    <div style={{ margin: "20px" }}>
      <h2>Create a New Proposal</h2>
      <textarea
        rows="4"
        cols="50"
        placeholder="Proposal details..."
        value={proposalText}
        onChange={(e) => setProposalText(e.target.value)}
      />
      <br />
      <button onClick={handleCreate}>Submit Proposal</button>
    </div>
  );
}
