import { useEffect } from "react";

function Index() {
  useEffect(() => {
    console.log("This is useEffect");
  }, []);

  return (
    <div>
      <p className="text-3xl w-17">THis is index</p>
    </div>
  );
}

export default Index;
