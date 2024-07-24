using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CateringController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CateringController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Catering>>> GetCaterings()
        {
            return await _context.Caterings.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Catering>> GetCatering(int id)
        {
            var catering = await _context.Caterings.FindAsync(id);
            if (catering == null)
            {
                return NotFound();
            }
            return catering;
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<Catering>> CreateCatering(Catering catering)
        {
            _context.Caterings.Add(catering);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetCatering), new { id = catering.Id }, catering);
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateCatering(int id, Catering catering)
        {
            if (id != catering.Id)
            {
                return BadRequest();
            }
            _context.Entry(catering).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteCatering(int id)
        {
            var catering = await _context.Caterings.FindAsync(id);
            if (catering == null)
            {
                return NotFound();
            }
            _context.Caterings.Remove(catering);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}