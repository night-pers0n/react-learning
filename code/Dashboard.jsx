function Dashboard({ data }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <UserStats user={data.user} />
      <RecentActivity activity={data.activity} />
      <ImportantMessages messages={data.messages} />
    </div>
  );
}