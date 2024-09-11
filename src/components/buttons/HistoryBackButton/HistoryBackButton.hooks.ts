import { useRouter } from "next/navigation";
import { useCallback } from "react";

type UseHistoryBackButtonProps = {
  router: ReturnType<typeof useRouter>;
};

function useHistoryBackButton({ router }: UseHistoryBackButtonProps) {
  const handleClick = useCallback(() => {
    router.back();
  }, [router]);

  return {
    handleClick,
  };
}

export { useHistoryBackButton };
