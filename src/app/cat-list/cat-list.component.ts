import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {
  cats: any[] = [];
  filteredCats: any[] = [];
  searchTerm: string = '';
  filterType: string = 'breed'; // Add this property to keep track of the selected filter type
  currentPage: number = 1;
  totalPages: number = 1;
  itemsPerPage: number = 5;

  constructor(private catService: CatService) {}

  ngOnInit() {
    this.catService.getCats().subscribe(
      (data) => {
        console.log('API Response:', data); // Debugging line
        this.cats = data.data || data;
        console.log('Cats:', this.cats); // Debugging line
        this.totalPages = Math.ceil(this.cats.length / this.itemsPerPage);
        this.filterCats();
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  filterCats() {
    console.log('Search Term:', this.searchTerm);
    console.log('Filter Type:', this.filterType);
    console.log('All Cats:', this.cats);
    
    const filtered = this.cats.filter((cat) => {
      const value = cat[this.filterType].toLowerCase();
      return value.includes(this.searchTerm.toLowerCase());
    });
    console.log('Filtered Cats:', filtered);

    this.filteredCats = filtered.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
    console.log('Displayed Cats:', this.filteredCats);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.cats.length) {
      this.currentPage++;
      this.filterCats();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.filterCats();
    }
  }

  // Method to calculate the starting number for BIL column
  getStartingNumber() {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  pageNumbers(): number[] {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }

  goToPage(event: any) {
    const pageNumber = event.target.value;
    this.currentPage = pageNumber;
    this.filterCats(); // Update data accordingly
  }
}
