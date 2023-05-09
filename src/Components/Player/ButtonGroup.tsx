export const ButtonGroup: React.FC<{
  handleApprove: () => void;
  handleReject: () => void;
}> = ({ handleApprove, handleReject }) => (
  <div>
    <button onClick={handleApprove}>Approve</button>
    <button onClick={handleReject}>Reject</button>
  </div>
);
