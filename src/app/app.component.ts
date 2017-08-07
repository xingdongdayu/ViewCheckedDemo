import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked{
  message: string;
  ngAfterViewInit(): void {
    console.log("父组件的视图初始化完毕");
    //this.message = "Hello"; // angular不允许在view组装完成后再更新组件属性而触发视图检查
    setTimeout(() => { //解决上一行提到的问题，就是把这行代码放入另一个JavaScript运行周期中
      this.message = "Hello";
    },0);
  }

  ngAfterViewChecked(): void {
    console.log("父组件的视图变更检测完毕");
  }

  @ViewChild("child1") // 通过装饰器属性，找到相应的子组件，并在下一行将它赋值给child1变量
  child1: ChildComponent; // 在父组件中获得一个子组件的引用,可以用它调用子组件方法

  constructor(){}

  ngOnInit(): void {
    // this.child1.greeting("Ryan");
    setInterval(() => {
      this.child1.greeting("Ryan");
    }, 5000);
  }
}
