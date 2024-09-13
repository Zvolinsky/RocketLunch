using RocketLunch.Server.Data.Models.CateringInfo;
using RocketLunch.Server.Data.Models.JoinModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RocketLunch.Server.Data.Models
{
    public class Dish
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public required string Name { get; set; }
        
        public int TypeOfDishId { get; set; }
        public TypeOfDish TypeOfDish { get; set; }

        public float Price { get; set; }
        public string Description { get; set; }

        public int CateringId { get; set; }
        public Catering Catering { get; set; }

        public ICollection<OrderDish> DishOrders { get; set; }
    }
}
