function BountiesPaid({ bountiesPaid }: any) {
  function bountyQuantity() {
    let itemAmount = bountiesPaid.filter((item: string) => item === "paid");
    return itemAmount.length;
  }

  return (
    <div className="Profile-Stat-Card">
      <h5 className="Profile-Stat-Stat">{bountyQuantity()}</h5>
      <span className="Profile-Stat-Subtext">Bounties paid</span>
    </div>
  );
}

export default BountiesPaid;
