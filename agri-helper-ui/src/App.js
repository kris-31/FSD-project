import "./App.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Agris from "./pages/Agris";
import SingleAgri from "./pages/SingleAgri";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import ApexChart from "./components/smallcomp/graph";
import ContactUs from "./pages/ContactUs";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Adminnavtab from "./components/Admin/navigationtab"
import "./css/App.css";
import Loginmain from "./components/Admin/login";
import AdminMinPage from "./components/Admin/Mainadminpage";
// import FeatureProducts from "./pages/FeatureProducts";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/" component={Agris} />
        <Route exact path="/product/:pathid" render={(props) => <SingleAgri {...props} />} />
        <Route exact path="/blogs/" component={Blogs} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/login" component={Loginmain }/>
        <Route exact path="/fp" component={ApexChart} />
        {/* <Route exact path="/admin" component={AdminMinPage} /> */}
        <Route exact path="/admin/:username" render={(props) => <AdminMinPage {...props} />} />

        <Route component={Error} />
      </Switch>
    </>

  );
}

export default App;
