using FOMS.API.Models;
using FOMS.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace FOMS.API.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly AuthService _authService;

    public AuthController(AuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public IActionResult Login(LoginRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Username) ||
            string.IsNullOrWhiteSpace(request.Password))
        {
            return BadRequest(new
            {
                success = false,
                message = "Username and password required"
            });
        }

        var user = _authService.Authenticate(request);

        if (user == null)
        {
            return Unauthorized(new
            {
                success = false,
                message = "Invalid credentials"
            });
        }

        return Ok(new
        {
            success = true,
            user
        });
    }
}