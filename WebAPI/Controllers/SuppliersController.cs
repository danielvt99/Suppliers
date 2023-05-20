using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DataContext.Models;
using DataContext.DTO;
using System.Drawing.Printing;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuppliersController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public SuppliersController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Suppliers
        [HttpGet("{pageNumber}/{pageSize}")]
        public async Task<ActionResult<PagedResultDTO<Supplier>>> GetSuppliers(int pageNumber, int pageSize)
        {
            if (_context.Suppliers == null)
            {
                return NotFound();
            }
            var totalItems = await _context.Suppliers.CountAsync();
            var suppliers = await _context.Suppliers
                .Skip(pageNumber * pageSize)
                .Take(pageSize)
                .ToListAsync();
            PagedResultDTO<Supplier> pagedResult = new PagedResultDTO<Supplier>()
            {
                TotalCount = totalItems,
                Results = suppliers
            };

            return pagedResult;
        }

        // GET: api/Suppliers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Supplier>> GetSupplier(long id)
        {
          if (_context.Suppliers == null)
          {
              return NotFound();
          }
            var supplier = await _context.Suppliers.FindAsync(id);

            if (supplier == null)
            {
                return NotFound();
            }

            return supplier;
        }

        // PUT: api/Suppliers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutSupplier(Supplier supplier)
        {
            Supplier existingSupplier = await _context.Suppliers.FindAsync(supplier.SupplierId);

            var requestStatus = new RequestStatus
            {
                Id = existingSupplier.SupplierId,
                Status = "Success",
                Message = ""
            };

            try
            {
                if (existingSupplier != null)
                {
                    existingSupplier.TelephoneNumber = supplier.TelephoneNumber;
                    existingSupplier.Name = supplier.Name;
                    existingSupplier.Products = supplier.Products;
                }
                else
                {
                    return NotFound();
                }
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException e)
            {
                var innerException = e.InnerException;
                if (innerException != null)
                {
                    requestStatus.Status = "Failed";
                    requestStatus.Message = innerException.Message;
                    return Ok(requestStatus);
                }
                else
                {
                    throw;
                }
            }

            return Ok(requestStatus);
        }

        // POST: api/Suppliers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Supplier>> PostSupplier(Supplier supplier)
        {
            var requestStatus = new RequestStatus
            {
                Status = "Success",
                Message = ""
            };

            if (_context.Suppliers == null)
            {
                return Problem("Entity set 'DatabaseContext.Suppliers'  is null.");
            }

            _context.Suppliers.Add(supplier);
            try
            {
                await _context.SaveChangesAsync();

                requestStatus.Id = supplier.SupplierId;
                requestStatus.Status = "Success";
                requestStatus.Message = "";
                return CreatedAtAction("PostSupplier", requestStatus);
            }
            catch (DbUpdateException e)
            {
                var innerException = e.InnerException;
                if (innerException != null)
                {
                    requestStatus.Status = "Failed";
                    requestStatus.Message = innerException.Message;
                    return Ok(requestStatus);
                }

                if (SupplierExists(supplier.SupplierId))
                {
                    return Conflict(requestStatus);
                }
                else
                {
                    throw;
                }
            }
        }

        // DELETE: api/Suppliers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSupplier(long id)
        {
            if (_context.Suppliers == null)
            {
                return NotFound();
            }
            var supplier = await _context.Suppliers.FindAsync(id);
            if (supplier == null)
            {
                return NotFound();
            }

            _context.Suppliers.Remove(supplier);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SupplierExists(long id)
        {
            return (_context.Suppliers?.Any(e => e.SupplierId == id)).GetValueOrDefault();
        }
    }
}
