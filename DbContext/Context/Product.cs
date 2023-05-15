using System;
using System.Collections.Generic;

namespace DbContext.Context;

public partial class Product
{
    public int ProductId { get; set; }

    public long? SupplierId { get; set; }

    public string? ProductName { get; set; }

    public string? Description { get; set; }

    public decimal? Price { get; set; }

    public virtual Supplier? Supplier { get; set; }
}
