import { useRouter } from "next/router";
import { Button } from "./ui/button";
import { ArrowRightCircle } from "lucide-react";
const GoBackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // Navigates to the previous route in history
  };

  return (
    <div className="w-full flex justify-end">
      <Button variant={"link"} onClick={handleGoBack}>
        بازگشت
        <ArrowRightCircle />
      </Button>
    </div>
  );
};

export default GoBackButton;
