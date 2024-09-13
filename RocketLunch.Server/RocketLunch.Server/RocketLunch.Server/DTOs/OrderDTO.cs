using RocketLunch.Server.Data.Models.JoinModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RocketLunch.Server.Data.DTOs
{
    public class OrderDTO
    {
        public required string Name { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
