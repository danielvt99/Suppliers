using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataContext.Abstract
{
    public abstract class AuditEntity
    {
        public DateTime? DateCreated { get; set; }
        public DateTime? DateUpdated { get; set; }

        public virtual void OnEntityCreating()
        {
            DateCreated = DateTime.UtcNow;
            DateUpdated = DateTime.UtcNow;
        }

        public virtual void OnEntityUpdating()
        {
            DateUpdated = DateTime.UtcNow;
        }
    }
}
