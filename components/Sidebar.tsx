"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AccountsIcon from "./Icons/AccountsIcon";
import DashboardIcon from "./Icons/DashboardIcon";
import GetStartedIcon from "./Icons/GetStartedIcon";
import SettingsIcon from "./Icons/SettingsIcon";
import TransactionsIcon from "./Icons/TransactionsIcon";
import TransfersIcon from "./Icons/TransfersIcon";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Get Started", icon: GetStartedIcon, href: "/" },
    { name: "Dashboard", icon: DashboardIcon, href: "/dashboard" },
    {
      name: "Accounts",
      icon: AccountsIcon,
      href: "/accounts",
    },
    { name: "Transfers", icon: TransfersIcon, href: "/transfers" },
    { name: "Transactions", icon: TransactionsIcon, href: "/transactions" },
    { name: "Settings", icon: SettingsIcon, href: "/settings" },
  ];

  return (
    <nav className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={pathname === item.href ? "active" : ""}
            >
              <item.icon  />
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
