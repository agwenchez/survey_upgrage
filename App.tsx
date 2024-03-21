import {
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Interested from "./src/pages/Survey/InterestedCustomer";
import UnInterestedSurveyQuestions from "./src/pages/Survey/UnInterestedSurveyQuestions";
import SurveyLayout from "./src/layouts/SurveyLayout";
import Congratulations from "./src/pages/Survey/Congratulation";
import Conversion from "./src/pages/Survey/conversion";
import ConversionLanding from "./src/pages/Survey/ConversionLanding";
import Club from "./src/pages/Survey/Club";
import Paygo from "./src/pages/Survey/Paygo";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/survey/club" element={<Club />} />
        <Route path="/survey/paygo" element={<Paygo />} />
        <Route path="/survey/intrested" element={<Interested />} />
        <Route
          path="survey/conversion_landing_upgrade"
          element={<Conversion />}
        />
        x
        <Route
          path="survey/conversion_landing"
          element={<ConversionLanding />}
        />
        <Route
          path="/"
          element={<Navigate to="/survey/interested" replace />}
        />
        <Route path="/survey" element={<SurveyLayout />}>
          <Route index path="interested" element={<Interested />} />
          <Route
            path="uninterested"
            element={<UnInterestedSurveyQuestions />}
          />
          <Route path="congratulations" element={<Congratulations />} />
          {/* <Route path="conversion_landing_upgrade" element={<Conversion/>} /> */}
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

// const
