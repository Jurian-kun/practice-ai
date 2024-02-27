import { authMiddleware } from "@clerk/nextjs"; 

export default authMiddleware({
    publicRoutes: ["/", "/api/webhook"] // Remove "/api/create-chat" from public routes
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
};
