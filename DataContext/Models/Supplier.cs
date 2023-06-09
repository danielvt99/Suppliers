﻿using DataContext.Abstract;
using System;
using System.Collections.Generic;

namespace DataContext.Models;

public partial class Supplier : AuditEntity
{
    public Supplier() 
    {
        OnEntityCreating();
    }

    public long SupplierId { get; set; }

    public string? Name { get; set; }

    public string? TelephoneNumber { get; set; }

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
