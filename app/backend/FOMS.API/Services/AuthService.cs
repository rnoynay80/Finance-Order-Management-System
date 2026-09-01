using FOMS.API.Models;

namespace FOMS.API.Services;

public class AuthService
{
    public object? Authenticate(LoginRequest request)
    {
        if (request.Username == "admin" &&
            request.Password == "Password123")
        {
            return new
            {
                id = 1,
                username = "admin",
                role = "Administrator"
            };
        }

        return null;
    }
}