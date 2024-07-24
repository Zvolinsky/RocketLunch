using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace WebApi.Models
{
    public class Catering
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public string BackgroundImage { get; set; }
        public string MenuImage { get; set; }

        public List<Dish> Dishes { get; set; }
    }
}