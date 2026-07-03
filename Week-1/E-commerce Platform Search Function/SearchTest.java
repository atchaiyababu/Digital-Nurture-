public class SearchTest {

    
    public static Product linearSearch(Product[] products, String name) {

        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(name)) {
                return product;
            }
        }

        return null;
    }

    
    public static Product binarySearch(Product[] products, String name) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            int compare = products[mid].productName.compareToIgnoreCase(name);

            if (compare == 0)
                return products[mid];

            if (compare < 0)
                low = mid + 1;

            else
                high = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {

                new Product(101, "Camera", "Electronics"),
                new Product(102, "Laptop", "Electronics"),
                new Product(103, "Phone", "Electronics"),
                new Product(104, "Shoes", "Fashion"),
                new Product(105, "Watch", "Accessories")

        };

        Product result1 = linearSearch(products, "Laptop");

        if (result1 != null)
            System.out.println("Linear Search Found: " + result1.productName);

        Product result2 = binarySearch(products, "Laptop");

        if (result2 != null)
            System.out.println("Binary Search Found: " + result2.productName);
    }
}