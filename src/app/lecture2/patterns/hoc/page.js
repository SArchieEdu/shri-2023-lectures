"use client";

import { useCallback, useState } from "react";

const useIsAuthorized = () => {
  const [isAuthorized, setAuthorized] = useState(false);
  const switchAuthorized = useCallback(() => {
    setAuthorized((currentValue) => !currentValue);
  }, []);

  return { isAuthorized, switchAuthorized };
};

const AuthorizedComponent = () => {
  return <div>Только для авторизованных</div>;
};

const UnauthorizedComponent = () => {
  return <div>Только для не авторизованных</div>;
};

const withAuthorize = ({ Authorized, UnAuthorized }) => {
  return function WithAuthorizeComponent(props) {
    const { isAuthorized, userName } = useIsAuthorized();

    return isAuthorized ? (
      <Authorized {...props} userName={userName} />
    ) : (
      <UnAuthorized {...props} />
    );
  };
};

// const withFeature= ({ FeatureOn, FeatureOff, featureName }) => {
//   return function WithAuthorizeComponent(props) {
//     const { isAuthorized, userName } = useIsAuthorized();

//     return isAuthorized ? (
//       <Authorized {...props} userName={userName} />
//     ) : (
//       <UnAuthorized {...props} />
//     );
//   };
// };

const CustomComponent = withAuthorize({
  Authorized: AuthorizedComponent,
  UnAuthorized: UnauthorizedComponent,
});

export default function Hoc() {
  const { isAuthorized, switchAuthorized } = useIsAuthorized();
  return (
    <div>
      <button onClick={switchAuthorized}>
        {isAuthorized ? "LogOut" : "LogIn"}
      </button>
      <CustomComponent prop1="Hello" />
    </div>
  );
}
