import { UserProfile } from "@clerk/nextjs";
import React from "react";

;

const SettingsPage = () => {
  return (
    <div>
      <UserProfile
        routing="hash"
        appearance={{
          elements: {
            rootBox: "w-full ",
            cardBox: "w-full   rounded-none shadow-none dark:text-white",
            headerTitle: "capitalize font-medium underline ",
            page: "rounded-none",
            userPreviewMainIdentifier: "uppercase",
          },
        }}
      />
    </div>
  );
};

export default SettingsPage;
