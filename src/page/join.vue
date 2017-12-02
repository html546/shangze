<template>
 <div class="join">
     <div class="join1">
         <h1>加入我们</h1>
         <p>JOIN US</p>
         <Row >
             <i-col :md="8" :lg="8">
                 <div class="joinus" @mouseover="slde = true" @mouseout="slde = false">
                     <p>Android开发</p>
                     <p>5k-8k/月 3-5年 5人 临沂 全职</p>
                    <carder :show1="slde">
                        <h3 slot="title">岗位职责</h3>
                        <ul>
                            <li>1．根据产品需求，设计并完成Android端开发工作</li>
                            <li>2．参与产品需求分析并参与技术实施方案设计</li>
                            <li>3．负责编写和维护技术文档</li>
                            <li>4．与html5进行交互式移动平台的开发</li>
                        </ul>
                        <h3 slot="title2">任职要求</h3>
                        <ul slot="main2">
                            <li>1. 专科以上学历，计算机相关专业</li>
                            <li>2年以上Android软件开发经验,至少3个独立开发并上线的App</li>
                            <li>3. 较强的Java和面向对象语言功能,Android应用程序开发专家</li>
                            <li>4. 优秀的沟通技巧</li>
                        </ul>
                    </carder>
                 </div>
             </i-col>
             <i-col :md="8" :lg="8">
                 <div class="joinus" @mouseover="slde2 = true" @mouseout="slde2 = false">
                     <p>招聘销售总监</p>
                     <p>5k-8k/月 3-5年 5人 临沂 全职</p>
                    <carder :show1="slde2">
                        <h3 slot="title">岗位职责</h3>
                        <ul>
                            <li>1．根据产品需求，设计并完成Android端开发工作</li>
                            <li>2．参与产品需求分析并参与技术实施方案设计</li>
                            <li>3．负责编写和维护技术文档</li>
                            <li>4．与html5进行交互式移动平台的开发</li>
                        </ul>
                        <h3 slot="title2">任职要求</h3>
                        <ul slot="main2">
                            <li>1. 专科以上学历，计算机相关专业</li>
                            <li>2年以上Android软件开发经验,至少3个独立开发并上线的App</li>
                            <li>3. 较强的Java和面向对象语言功能,Android应用程序开发专家</li>
                            <li>4. 优秀的沟通技巧</li>
                        </ul>
                    </carder>
                 </div>
             </i-col>
             <i-col :md="8" :lg="8">
                 <div class="joinus" @mouseover="slde3 = true" @mouseout="slde3 = false">
                     <p>PHP开发工程师</p>
                     <p>面议 3-5年 5人 临沂 全职</p>
                    <carder :show1="slde3">
                        <h3 slot="title">岗位职责</h3>
                        <ul>
                            <li>1．根据产品需求，设计并完成Android端开发工作</li>
                            <li>2．参与产品需求分析并参与技术实施方案设计</li>
                            <li>3．负责编写和维护技术文档</li>
                            <li>4．与html5进行交互式移动平台的开发</li>
                        </ul>
                        <h3 slot="title2">任职要求</h3>
                        <ul slot="main2">
                            <li>1. 专科以上学历，计算机相关专业</li>
                            <li>2年以上Android软件开发经验,至少3个独立开发并上线的App</li>
                            <li>3. 较强的Java和面向对象语言功能,Android应用程序开发专家</li>
                            <li>4. 优秀的沟通技巧</li>
                        </ul>
                    </carder>
                 </div>
             </i-col>
         </Row>
         <Row >
             <i-col :md="8" :lg="8">
                 <div class="joinus" @mouseover="slde4 = true" @mouseout="slde4 = false">
                     <p>IOS开发工程师</p>
                     <p>面议 3-5年 5人 临沂 全职</p>
                    <carder :show1="slde4">
                        <h3 slot="title">岗位职责</h3>
                        <ul>
                            <li>1．根据产品需求，设计并完成Android端开发工作</li>
                            <li>2．参与产品需求分析并参与技术实施方案设计</li>
                            <li>3．负责编写和维护技术文档</li>
                            <li>4．与html5进行交互式移动平台的开发</li>
                        </ul>
                        <h3 slot="title2">任职要求</h3>
                        <ul slot="main2">
                            <li>1. 专科以上学历，计算机相关专业</li>
                            <li>2年以上Android软件开发经验,至少3个独立开发并上线的App</li>
                            <li>3. 较强的Java和面向对象语言功能,Android应用程序开发专家</li>
                            <li>4. 优秀的沟通技巧</li>
                        </ul>
                    </carder>
                 </div>
             </i-col>
             <i-col :md="8" :lg="8">
                 <div class="joinus" @mouseover="slde5 = true" @mouseout="slde5 = false">
                     <p>java开发工程师</p>
                     <p>5k-8k/月 3-5年 1人 临沂 全职</p>
                    <carder :show1="slde5">
                        <h3 slot="title">岗位职责</h3>
                        <ul>
                            <li>1．根据产品需求，设计并完成Android端开发工作</li>
                            <li>2．参与产品需求分析并参与技术实施方案设计</li>
                            <li>3．负责编写和维护技术文档</li>
                            <li>4．与html5进行交互式移动平台的开发</li>
                        </ul>
                        <h3 slot="title2">任职要求</h3>
                        <ul slot="main2">
                            <li>1. 专科以上学历，计算机相关专业</li>
                            <li>2年以上Android软件开发经验,至少3个独立开发并上线的App</li>
                            <li>3. 较强的Java和面向对象语言功能,Android应用程序开发专家</li>
                            <li>4. 优秀的沟通技巧</li>
                        </ul>
                    </carder>
                 </div>
             </i-col>
             <i-col :md="8" :lg="8">
                 <div class="joinus" @mouseover="slde6 = true" @mouseout="slde6 = false">
                     <p>web前端开发</p>
                     <p>5k-8k/月 3-5年 5人 临沂 全职</p>
                    <carder :show1="slde6">
                        <h3 slot="title">岗位职责</h3>
                        <ul>
                            <li>1．根据产品需求，设计并完成Android端开发工作</li>
                            <li>2．参与产品需求分析并参与技术实施方案设计</li>
                            <li>3．负责编写和维护技术文档</li>
                            <li>4．与html5进行交互式移动平台的开发</li>
                        </ul>
                        <h3 slot="title2">任职要求</h3>
                        <ul slot="main2">
                            <li>1. 专科以上学历，计算机相关专业</li>
                            <li>2年以上Android软件开发经验,至少3个独立开发并上线的App</li>
                            <li>3. 较强的Java和面向对象语言功能,Android应用程序开发专家</li>
                            <li>4. 优秀的沟通技巧</li>
                        </ul>
                    </carder>
                 </div>
             </i-col>
         </Row>
     </div>
 </div>
</template>
<script>
import $ from "jquery";
import carder from '../components/carder.vue';
export default {
  components:{
      carder
  },
  mounted() {
    
  },
  data(){
      return {
          slde:false,
          slde2:false,
          slde3:false,
          slde4:false,
          slde5:false,
          slde6:false
      }
  }
};
</script>
<style scoped>
.join {
  background-image: url(../assets/jrwm.jpg);
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
    height: calc(100% - 63px);
}
.join1 {
  width: 100%;
  margin: 0 auto;
}
.join1>h1,.join1>p{
  text-align: center;
  color: #fff;
}
.join1 h1 {
  font-size: 40px;
  margin: 0 0 0.67em;
  padding-top: 0.67em;
}
.join1 > p {
  margin-bottom: 50px;
}
.join1 div.joinus {
  width: 80%;
  height: 206px;
  background: #23ade5;
  border: none;
  margin: 0 auto;
  outline: none;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
}
.joinus>p {
  color: #fff;
  line-height: 30px;
  text-align: center;
}
.joinus p:nth-of-type(1) {
  margin-top: 70px;
}
.join1 .ivu-row {
  margin-bottom: 30px;
}
/* .fade-enter-active,.fade-leave-active{
    transition: all 1s ease;
}
.fade-enter,.fade-leave-active{
    transform: translateX(100px);
    transform: rotateY(180deg);
} */
</style>
