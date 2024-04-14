import { useMemo } from "react";

function useURLParameters() {
	const params = useMemo(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const paramsObject = {};
		searchParams.forEach((value, key) => {
			paramsObject[key] = value;
		});
		return paramsObject;
	}, []);

	return params;
}

export default useURLParameters;
