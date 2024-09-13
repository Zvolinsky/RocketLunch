using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RocketLunch.Server.Data.DTOs
{
    public class CateringDTO
    {
        public required string Name { get; set; }
        public string? Description { get; set; }
        public string? Address { get; set; }
        public string? BackgroundImageURL { get; set; }
        public string? MenuImageURL { get; set; }
    }
}
