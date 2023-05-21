using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataContext.DTO
{
    public class PagedResultDTO<T>
    {
        public long TotalCount { get; set; }
        public List<T> Results { get; set; }
    }
}
