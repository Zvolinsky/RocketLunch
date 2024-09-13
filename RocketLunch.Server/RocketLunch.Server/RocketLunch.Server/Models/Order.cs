using RocketLunch.Server.Data.Models.JoinModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RocketLunch.Server.Data.Models
{
    public class Order
    {
        [Key] 
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public required string Name { get; set; }
        public ICollection<OrderDish> OrderDishes { get; set; }
        public DateTime DateCreated { get; set; }

    }
}
