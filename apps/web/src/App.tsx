import {
  Counter,
  Button,
  FeedbackDialog,
  HeaderActionMenus,
  SEThemeProvider,
} from "@repo/ui";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { iconData, theme } from "./data";

const Qna = () => <div>QnA Page</div>;

export default function App() {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <SEThemeProvider themeProps={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <HeaderActionMenus iconData={iconData} />
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
            }
          />
          <Route path="/qna" element={<Qna />} />
        </Routes>
      </BrowserRouter>
    </SEThemeProvider>
  );
}
