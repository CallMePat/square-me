import React, { ReactNode } from "react";

interface ViewProps {
  title?: string;
  children: ReactNode;
}

function View({ title = "Online Payments", children }: ViewProps) {
  return (
    <div className="payments-container">
        <div className="border">
        <h1 className="page-title ">{title}</h1>

        </div>
      {children}
    </div>
  );
}

export default View;
