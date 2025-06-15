import { createRoot } from "react-dom/client";
import { Header, Counter, Button, FeedbackDialog } from "@repo/ui";
import "./style.css";
import { useState } from "react";

const App = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <Header title="Web" />
      <div className="card">
        <Counter />
        <Counter />
      </div>
      <Button
        onClick={() => {
          setDialogOpen((prev: boolean) => !prev);
        }}
      />
      <FeedbackDialog
        open={dialogOpen}
        title="Feedback"
        content={<div>Do you like this app?</div>}
        onAction={handleDialogClose}
        onClose={handleDialogClose}
      />
    </div>
  );
};

createRoot(document.getElementById("app")!).render(<App />);
