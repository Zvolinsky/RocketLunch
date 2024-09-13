using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RocketLunch.Server.Data.Models
{
    public class Catering
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public required string Name { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public string BackgroundImageURL { get; set; }
        public string MenuImageURL { get; set; }
        public ICollection<Dish> Dishes { get; set; }
    }
}
