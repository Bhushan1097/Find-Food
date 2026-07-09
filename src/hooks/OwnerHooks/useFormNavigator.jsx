import { useLocation, useNavigate } from "react-router-dom";

const routes = [
  "/ownerForm/messDetails",
  "/ownerForm/menu",
  "/ownerForm/price",
  "/ownerForm/time",
];

const useFormNavigator = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = routes.indexOf(location.pathname);

  const next = () => {
    console.log('next working')
    if (currentIndex < routes.length - 1) {
      navigate(routes[currentIndex + 1]);
    }
  };

  const back = () => {
    console.log('back working')

    if (currentIndex > 0) {
      navigate(routes[currentIndex - 1]);
    }
  };

  return {
    next,
    back,
    currentIndex,
    isFirst: currentIndex === 0,
    isLast: currentIndex === routes.length - 1,
  };
};

export default useFormNavigator;