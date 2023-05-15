using System;
using System.Collections.Generic;

namespace DbContext.Context;

public partial class Supplier
{
    public long SupplierId { get; set; }

    public string? Name { get; set; }

    public string? TelephoneNumber { get; set; }

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
