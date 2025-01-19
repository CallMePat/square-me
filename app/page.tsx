"use client";

import View from "@/components/View";
import { useState, useEffect } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { RiArrowDropDownLine } from "react-icons/ri";

const revenueData = {
  monthly: [
    { month: "Jan", revenue: 280000 },
    { month: "Feb", revenue: 420000 },
    { month: "Mar", revenue: 350000 },
    { month: "Apr", revenue: 280000 },
    { month: "May", revenue: 150000 },
    { month: "Jun", revenue: 180000 },
    { month: "Jul", revenue: 170000 },
    { month: "Aug", revenue: 180000 },
    { month: "Sep", revenue: 160000 },
    { month: "Oct", revenue: 170000 },
    { month: "Nov", revenue: 220000 },
    { month: "Dec", revenue: 110000 },
  ],
};

export default function PaymentsPage() {
  const [timeRange, setTimeRange] = useState("Last 7 days");
  const [chartMargin, setChartMargin] = useState({
    top: 5,
    right: 30,
    left: 20,
    bottom: 5,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setChartMargin({
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        });
      } else {
        setChartMargin({
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        });
      }
    };

    // Set initial margin
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("8000000000");
  };

  return (
    <View title="Online Payments">
      <div className="">
        <div className="account-details">
          <span className="label">ACCOUNT DETAILS</span>
          <span className="bank-name">STERLING BANK</span>
          <div className="account-number-container">
            <span className="account-number">8000000000</span>
            <button onClick={copyToClipboard} className="copy-button">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </button>
          </div>
          <span className="store-name">OGEDENGBE FRUITS STORE</span>
        </div>
      </div>

      <div className="revenue-container">
        <div className="revenue-card">
          <div className="time-selector">
            <div className="time-container">
              <span>Showing data for</span>
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="time-filters">
              <button className="filter-button">Today</button>
              <button className="filter-button active">Last 7 days</button>
              <button className="filter-button">Last 30 days</button>
            </div>
          </div>

          <div className="revenue-control-container">
            <div className="revenue-controls">
              <div className="revenue-header">
                <div className="revenue-title">
                  <h2>Revenue</h2>
                  <span className="revenue-change">
                    +0.00% <span className="revenue-text"> vs Last 7 days</span>
                  </span>
                </div>
                <div className="revenue-title-mobile">
                  <h2>Revenue</h2>
                  <div className="revenue-dropdown">
                    <span>Weekly</span>
                    <RiArrowDropDownLine />
                  </div>
                </div>

                <div className="revenue-total">
                  ₦0.00 <span className="revenue-text">in total value</span>{" "}
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={revenueData.monthly}
                margin={chartMargin}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e5e7eb"
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#8686AC" }}
                  fontSize={12}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#8686AC" }}
                  tickFormatter={(value) => `${value / 1000}K`}
                  fontSize={12}
                />
                <Bar
                  dataKey="revenue"
                  fill="#fbbf24"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </View>
  );
}