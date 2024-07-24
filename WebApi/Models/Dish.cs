using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace WebApi.Models
{
    public class Dish
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string TypeOfDish { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public int CateringId { get; set; }

        public Catering Catering { get; set; }
        public List<OrderDish> DishOrders { get; set; }
    }
}