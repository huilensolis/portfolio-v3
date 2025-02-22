import dynamic from "next/dynamic";
import React, { ReactNode } from "react";

const NoSsr = ({ children }: { children: ReactNode }) => (
	<React.Fragment>{children}</React.Fragment>
);

export default dynamic(() => Promise.resolve(NoSsr), {
	ssr: false,
});
