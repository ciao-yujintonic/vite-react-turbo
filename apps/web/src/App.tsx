import {
  Counter,
  Button,
  FeedbackDialog,
  IHeaderIcon,
  HeaderActionMenus,
  HeaderIconType,
} from "@repo/ui";
import { InfoOutlined, HelpOutline } from "@mui/icons-material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

const Qna = () => <div>QnA Page</div>;

export default function App() {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const iconData: Array<IHeaderIcon> = [
    {
      svgIcon: InfoOutlined,
      alt: "Manual",
      tooltiptext: "Manual",
      isShown: true,
      type: HeaderIconType.LINK,
      url: "http://www.google.com",
    },
    {
      svgIcon: HelpOutline,
      alt: "QnA",
      tooltiptext: "QnA",
      isShown: true,
      type: HeaderIconType.LINK,
      url: "/qna",
    },
  ];
  return (
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
  );
}
