using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataContext.Models;

public partial class Supplier
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long SupplierId { get; set; }

    public string? Name { get; set; }

    public string? TelephoneNumber { get; set; }

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
