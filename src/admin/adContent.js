import { Route, Routes } from "react-router";
import Blogs from "./blogs";
import DataBoard from "./databoard";
import Emails from "./emails";
import AdNotifications from "./notifications";
import Oders from "./orders";
import Products from "./products";
import Promotions from "./promotions";
import Setting from "./setting";

export default function AdContentTab() {
  return (
    <>
      <div className="admin__content col-12 col-md-9 col-xl-10">
        <Routes>
          <Route path="notifications" element={<AdNotifications />} />
          <Route path="orders" element={<Oders />} />
          <Route path="emails" element={<Emails />} />
          <Route path="databoard" element={<DataBoard />} />
          <Route path="products" element={<Products />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="setting" element={<Setting />} />
        </Routes>
      </div>
    </>
  );
}
