using RocketLunch.Server.Data.Models.CateringInfo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RocketLunch.Server.Data.DTOs
{
    public class DishDTO
    {
        public required string Name { get; set; }

        public int TypeOfDishId { get; set; }

        public float Price { get; set; }
        public string? Description { get; set; }

        public int CateringId { get; set; }
    }
}
