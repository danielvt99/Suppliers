using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataContext.DTO
{
    public class RequestStatus
    {
        public long Id { get; set; }
        public string Status { get; set; }
        public string Message { get; set; }
    }
}
