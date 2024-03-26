package org.colorcoding.ibas.businesspartner.bo.internalreconciliation;

import java.beans.PropertyChangeEvent;

import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;

import org.colorcoding.ibas.bobas.bo.BusinessObjects;
import org.colorcoding.ibas.bobas.common.ICriteria;
import org.colorcoding.ibas.businesspartner.MyConfiguration;

/**
 * 内部对账-行 集合
 */
@XmlType(name = InternalReconciliationLines.BUSINESS_OBJECT_NAME, namespace = MyConfiguration.NAMESPACE_BO)
@XmlSeeAlso({ InternalReconciliationLine.class })
public class InternalReconciliationLines extends BusinessObjects<IInternalReconciliationLine, IInternalReconciliation>
		implements IInternalReconciliationLines {

	/**
	 * 业务对象名称
	 */
	public static final String BUSINESS_OBJECT_NAME = "InternalReconciliationLines";

	/**
	 * 序列化版本标记
	 */
	private static final long serialVersionUID = -1142005999007347810L;

	/**
	 * 构造方法
	 */
	public InternalReconciliationLines() {
		super();
	}

	/**
	 * 构造方法
	 * 
	 * @param parent 父项对象
	 */
	public InternalReconciliationLines(IInternalReconciliation parent) {
		super(parent);
	}

	/**
	 * 元素类型
	 */
	public Class<?> getElementType() {
		return InternalReconciliationLine.class;
	}

	/**
	 * 创建内部对账-行
	 * 
	 * @return 内部对账-行
	 */
	public IInternalReconciliationLine create() {
		IInternalReconciliationLine item = new InternalReconciliationLine();
		if (this.add(item)) {
			return item;
		}
		return null;
	}

	@Override
	protected void afterAddItem(IInternalReconciliationLine item) {
		super.afterAddItem(item);
		if (item instanceof InternalReconciliationLine) {
			((InternalReconciliationLine) item).parent = this.getParent();
		}
	}

	@Override
	public ICriteria getElementCriteria() {
		ICriteria criteria = super.getElementCriteria();
		return criteria;
	}

	@Override
	protected void onParentPropertyChanged(PropertyChangeEvent evt) {
		super.onParentPropertyChanged(evt);
	}
}
