### #03-6. 詳細度

<a href="../">戻る</a>

---

#### もくじ 📝

- CSSプロパティの適用例
  - スタイルの継承（カスケード式であること）
  - 記述順序
  - 詳細度による優先
- 詳細度の計算

---

#### CSSプロパティの適用例

<blockquote class="-small">
・CSSはCascading Style Sheets<br>（<span class="-b">カスケーディング</span>・スタイル・シート)の略  
・「上流から下流に引き継がれて適用される」というイメージ
</blockquote>

CSSの冒頭で、上記のことをお伝えしました。  
それに加え、CSSには、<span class="-b">記載順序</span>と<span class="-b">セレクタの指定方法</span>により、CSSプロパティの優先される値が変わってきます。

--

#### CSSプロパティの適用例
 - カスケード式であること（継承）

HTML
```html
<ul class="hoge">
    <li>要素1</li>
</ul>
```
CSS
```css
.hoge {
  color: gray;
}
```
「要素1」も灰色が適用され、ulタグからliタグへスタイルが継承されていることになります。

-- 

#### CSSプロパティの適用例
 - 記述順序

```css
.pseudo__item {
  color: white;
}

.pseudo__item {
  color: grey;
}
```
上記では、 後に記載された**color: gray;** が優先されます。

-- 

#### CSSプロパティの適用例
 - 詳細度による優先

```css
li.pseudo__item {
  color: white;
}

.pseudo__item {
  color: grey;
}
```
上記の場合では、 **color: white;** が優先されます。  
<p class="-mt24">これらのように基本的には、上から下にCSSプロパティが上書きされるのですが、  セレクタの指定方法（詳細度）により、優先度が変わってきます。</p>

---

#### 詳細度の計算

セレクタの詳細度(優先度)は、セレクタの種類によって点数で表すことができます。

-- 

#### 詳細度の計算

<p class="-ex-small"><br>※抜粋</p>
<table>
<tr><th>セレクタ名(書式例)</th><th>詳細度A</th><th>詳細度B</th><th>詳細度C</th></tr>
<tr><th>疑似要素(::before)</th><th>0</th><th>0</th><th>1</th></tr>
<tr><th>要素型(div)</th><th>0</th><th>0</th><th>1</th></tr>
<tr><th>属性セレクタ([type="submit"])</th><th>0</th><th>1</th><th>0</th></tr>
<tr><th>擬似クラス(:hover)</th><th>0</th><th>1</th><th>0</th></tr>
<tr><th>classセレクタ(.sample)</th><th>0</th><th>1</th><th>0</th></tr>
<tr><th>idセレクタ(#sample)</th><th>1</th><th>0</th><th>0</th></tr>
</table>
<a href="https://qiita.com/flag_ryo/items/cf3512f9b4978c41d0e1" class="-ex-small">他のセレクタも含めた詳細度</a>  

<span class="-b">A > B > C</span>という関係性で、<span class="-b">繰り上がりもありません</span>。  

-- 

#### 詳細度の計算

html
```html
<p id="hoge" class="fuga">サンプルテキスト</p>
```

css
```css
#hoge {
  background-color: red;
}

p.fuga {
  background-color: blue;
}
```


１つ目のセレクタ: A:1, B:0, C:0  
２つ目のセレクタ: A:0, B:1, C:1  

<p class="-mt24">CSSは、全てグローバルに定義されている状態になりますので、上書きされやすくなり、これらの詳細度は重要になってきます。</p>

--

#### 詳細度の計算

先ほどの参考サイトにもありますが、他にも<span class="-b">!important</span>, <span class="-b">インラインスタイル</span>があります。  
関係性としては、 !important > インラインスタイル > A > B > Cになりますが、  
基本的に<span class="-b">使用しないでください。</span>  
css
```css
p.fuga {
  background-color: blue !important;
}
```
<br>
html
```html
<!-- インラインスタイル -->
<div style="background-color: red; height: 100px;">hogehoge</div>
```

---

#### まとめ
- CSSは、基本的に上から下に上書きされる
- しかし、セレクタの指定方法により、優先度（詳細度）が違う
- 詳細度には、計算方法がある