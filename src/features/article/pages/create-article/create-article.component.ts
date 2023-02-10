import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Editor, NgxEditorModule} from "ngx-editor";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {BaseService} from "../../../../app/services/article/base.service";
import {ArticleService} from "../../../../app/services/article/article.service";

@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [HttpClientModule, CommonModule, NgxEditorModule, FormsModule],
  providers: [BaseService, ArticleService],
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent {

  username?: string = '';
  title?: string = '';
  content?: string | any = '';
  editor?: Editor | any;

  //html: '' | any;

  constructor(
    public articleService: ArticleService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }


  //servise yollamak için kullanıcıdan gelen dataları alıyoruz ve bir objede tutuyoruz
  post() {
    let postObj = {
      username: this.username,
      title: this.title,
      content: this.content,
      comments: []
    };
    // objeyi servise yolluyoruz, subscribe olduktan sonra res cevabı gelecek ve kayıt edecek
    this.articleService.postArticle(postObj).subscribe((res) => {
      console.log(res);
      //işlem başarılı olduğunda anasayfaya yönlendirme yapıyoruz
      this.router.navigate(['article/home']);
    })
  }


  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
