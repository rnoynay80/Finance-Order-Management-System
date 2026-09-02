using Microsoft.AspNetCore.Mvc;

namespace FOMS.API.Controllers;

[ApiController]
[Route("api/orders")]
public class OrdersController : ControllerBase
{
    [HttpGet]
    public IActionResult GetOrders()
    {
        return Ok(new
        {
            message = "Orders endpoint is working.",
            orders = new[]
            {
                new
                {
                    id = 1001,
                    customer = "ABC Corporation",
                    amount = 1500.00,
                    status = "Pending"
                }
            }
        });
    }
}