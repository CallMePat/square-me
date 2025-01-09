import AccountDetails from './AccountDetails'
import RevenueChart from './RevenueChart'
const Dashboard = () => {
  return (
    <main className="dashboard">
      <h1>Online Payments</h1>
      <AccountDetails />
      <RevenueChart />
    </main>
  )
}

export default Dashboard

