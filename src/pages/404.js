import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 5000);
  return (
    <div>
      <img
        src="https://e7.pngegg.com/pngimages/56/403/png-clipart-http-404-error-wrong-http-404-404-error-thumbnail.png"
        alt="error"
        width="50%"
      />
    </div>
  );
};

export default ErrorPage;
